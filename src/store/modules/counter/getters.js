export default {
    getValue: state => {
        let formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        let actualValue = formatter.format(state.value)

        return actualValue.substr(0,actualValue.length-3)
    }
}