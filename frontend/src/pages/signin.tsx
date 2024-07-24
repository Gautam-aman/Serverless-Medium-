import { Quote } from "../components/quote"
import { Auth } from "../components/auth"

export const SignIn = ()=>{
    return <div>
     <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
        <Auth type = "SignIn" />
        </div>
       <div className="invisible lg:visible">
       <Quote/>
       </div>

     </div>
    </div>
    }