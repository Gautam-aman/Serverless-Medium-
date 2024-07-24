import { ChangeEvent, useState } from "react";
import { Link, useNavigate} from "react-router-dom"
import { SingupInput } from "@rigelx2128/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
//import { SignIn } from "../pages/signin";

export const Auth = ({type} : {type:"SignUp" | "SignIn" }) => {
    const Navigate = useNavigate();

    const [postInputs , setpostInputs] = useState<SingupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/${type =="SignIn" ? "signin" : "signup"}`, postInputs)
            const jwt = response.data();
            localStorage.setItem("token", jwt);
            Navigate("/blog")
        }
        catch(e){
            console.log(e)
            alert("Error while signing")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            
        <div className="flex justify-center">
            <div>
                <div className="text-4xl font-extrabold ">
                    Create an Account
                </div>
                <div className="flex justify-center text-slate-500 pb-4">
                    {type == "SignIn" ? "Don't have an account? ": "Already have an account?"  }
                    <Link className="pl-1 underline" to={type== "SignIn" ? "/signup" :"/signin"}>
                         {type == "SignIn" ? "Sign Up" : "Login"}
                    </Link>
                </div>
                {type == "SignIn" ? "" : <div className="pb-2">
                <LableInput label="Name" placeholder="Aman Gautam..." onChange={(e)=>{
                setpostInputs ( c => ({
                    ...c, 
                    name :  e.target.value
                }))
                

            }}/></div>}
            <div className="pb-2">
            <LableInput label="Email" placeholder="Aman@gmail.com..." onChange={(e)=>{
                setpostInputs ( c => ({
                    ...c, 
                    email :  e.target.value
                }))
            }}/>
            </div>
            <LableInput label="Password" type={"password"} placeholder="*******" onChange={(e)=>{
                setpostInputs ( c => ({
                    ...c, 
                    password :  e.target.value
                }))
            }}/>
            <div className="flex justify-center mt-4">
            <button onClick={sendRequest} type="button" className=" w-full text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4">{ type=="SignUp" ?"Sign Up": "Sign In" }</button>
            </div>
            </div>
            
            </div>
        </div>
    </div>

}

interface LableInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type ? :string
}

function LableInput({ label, placeholder, onChange , type}: LableInputType) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />

    </div>
}

//