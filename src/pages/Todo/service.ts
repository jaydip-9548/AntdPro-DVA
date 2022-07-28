import request from 'umi-request'

export async function addTodos(params:any) {
    const url = "http://localhost:9000/todoapi"
    return request.get('url')
    .then(function (response){
        console.log(response)
        response.data =response,
        response.status = 'ok'
        return response
    }).catch(function(error){
        console.log(error)
    })
}