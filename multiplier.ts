const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b)
}

const parseArguments = (args) :Array<Number> => {
    if (args.lengh != 4) throw new Error('Wrong number of arguments.')

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ]
    } 
    throw new Error('Provided values were not numbers')
}

const cleanNumbers = parseArguments(process.argv)

const a: number = Number(cleanNumbers[0])
const b: number = Number(cleanNumbers[1])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)