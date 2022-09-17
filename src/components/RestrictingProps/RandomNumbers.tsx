type RandomNumberType = {
    value: number
}
type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isNegative?: never
    isPositive?: never
    isZero: boolean
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumbers = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {' '} 
            {isZero && 'zero'}
        </div>
    )
}