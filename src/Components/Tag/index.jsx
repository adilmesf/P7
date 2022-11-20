import React from 'react'
import styles from './style.module.css'

function Tag({tag}) {
        return (
            
            <div className={styles.TagMain}>
                {tag.map((Tag, index) => (
                    <div key={`${Tag}-${index}`} className={styles.TagContent}>{Tag}</div>
                ))}
            </div>

        )
}
  export default Tag