# Custom React Input Field

### _One line of code worths thousands lines of explanations._

```typescript
import React, { useState } from 'react'
import Input from 'custom-react-input-field'
import styles from './styles.module.scss'
const Container: React.FC<any> = () => {
    const [text, setText] = useState('')
    return <div className={styles.container}>
        <Input 
            label={'Your Name'}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            inputStyle={{
                paddingBottom: '2px'
            }}
          />
    </div>
}

export default Container
```
