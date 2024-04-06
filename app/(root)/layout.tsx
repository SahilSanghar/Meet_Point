import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
return (
    <main>
        navbar
        {children}
        footer
    </main>
    )
}

export default layout