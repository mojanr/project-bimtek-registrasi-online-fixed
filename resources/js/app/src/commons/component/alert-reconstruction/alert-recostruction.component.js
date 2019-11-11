import React from 'react'
import { Result } from 'antd'

const AlertReconstructionComponent = () => {
    return (
        <Result
            status="warning"
            title="This menu are under development control, could not be accessed yet!"
            // extra={
            //     <Button type="primary" key="console">
            //         Go Console
            //     </Button>
            // }
        />
    )
}

export default React.memo(AlertReconstructionComponent)
