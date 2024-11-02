import { Children } from "react";

export default function Section1col (props){
    return(
<section id="como-funciona" className="pt-16">
<div className="container mx-auto p-4">
  <div className="p-8 md:p-16 gap-16 border-solid border-2 border-white/[.05] rounded-xl">
    {props.children}
  </div>
</div>
</section>
    )
}
