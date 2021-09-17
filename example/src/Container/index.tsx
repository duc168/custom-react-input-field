import React, { useState } from 'react'
import Input from 'custom-react-input-field'
import styles from './styles.module.scss'
// import Input from 'CustomReactInput'
const Container: React.FC<any> = () => {
    const [text, setText] = useState('')
    return <div className={styles.container}>
        <Input 
            label={'Your Input Name'}
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