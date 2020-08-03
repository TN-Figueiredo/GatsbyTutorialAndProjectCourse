import React from "react"
import Layout from "../components/Layout"

import styles from "../components/blog.module.css"
console.log(styles.page)

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, laborum
          recusandae. Cumque sapiente inventore eos, illo corrupti aliquid
          voluptates sed ea, libero delectus quos nostrum.
        </p>
      </div>
    </Layout>
  )
}

export default blog
