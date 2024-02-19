export function formatData(dataToFormat) {
    const formattedData = {}

    dataToFormat.forEach((currEl) => {
        let project_key = currEl.projectKey;
        // console.log("project key", project_key);

        if (!formattedData[project_key]) {
            formattedData[project_key] = [];
        }
        formattedData[project_key].push(currEl);
        // let service = currEl.url.split('/')[3];
        // if (!!formattedData[project_key]) {
        //     formattedData[project_key].push(currEl);
        // }
    })

    return formattedData;
}