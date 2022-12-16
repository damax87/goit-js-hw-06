const refs = {
    input: document.querySelector(`#name-input`),
    output: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, onInputChange);


function onInputChange(event) {
    const query = event.currentTarget.value;
    if (!query) {
        refs.output.textContent = `Anonymous`;
         return refs.output.textContent;
    }
    else {
   return refs.output.textContent = query;
}
    }