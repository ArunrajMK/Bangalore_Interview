import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";


const getDataRequest = ()=>{
    return({
        type:GET_DATA_REQUEST
    })
}

const getDataSuccess = (data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}

const getDataFailure = ()=>{
    return({
        type:GET_DATA_FAILURE
    })
}


export const getData = ({destinationCity,name,originCity,departureDate,ReturnDate,DepartureTime,arrivalTime,price})=>(dispatch)=>{
    console.log("action name")
dispatch(getDataRequest())
return axios({
    method:"GET",
    url:"http://localhost:8080/results",
    params:{
        name:name,
        destinationCity:destinationCity,
        originCity:originCity,
        departureDate:departureDate,
        ReturnDate:ReturnDate,
        DepartureTime:DepartureTime,
        arrivalTime:arrivalTime,
        price:price
    }

    
})
.then((res)=>{
dispatch(getDataSuccess(res.data))
})
.then((error)=>{
dispatch(getDataFailure())
})
}