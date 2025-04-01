import { useRef, useState } from "react"

export function RefFocus() {
    const inputRef = useRef(null)
    const [input, setInput] = useState("")
    const handleClick = () => {
        const elem: any = inputRef.current
        if (elem !== null) {
            elem.focus()
        }
    }
    return (
        <>
            <input type="text" value={input} onChange={
                (e) => setInput(e.target.value)
            }
                onBlur={() => {
                    const elem: any = inputRef.current
                    if (elem !== null) {
                        console.log(elem.value)
                    }
                }}
                ref={inputRef}

            />
            <button onClick={handleClick}>Focus</button>
            <div>{input} = {}</div>
        </>

    )
}