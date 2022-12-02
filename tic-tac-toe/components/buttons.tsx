import { Radio } from "@nextui-org/react"

function buttons() {
    return (
        <Radio.Group className="buttons" label="Options" defaultValue="A">
            <Radio value="A">Classic</Radio>
            <Radio value="4">4 x 4</Radio>
            <Radio value="B">5 x 5</Radio>
            <Radio value="C">7 x 7</Radio>
            <Radio value="D">10 x 10</Radio>
        </Radio.Group>
    )
}

export default buttons