interface Props {
    value: any
    onChange: any
    placeholder: string
    type?: string
}
export const Input = ({ value, onChange, placeholder, type }: Props) => {

    const change = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <div>
            <input className="p-2 rounded" value={value} onChange={change} placeholder={placeholder} type={type}></input>
        </div>
    )
}