import { Children } from "react";

export default function Section2col (props){
    return(
<section id={props.id} className="pt-16">
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 p-8 md:p-16 gap-16 border-solid border-2 border-white/[.05] rounded-xl">
    {props.children}
  </div>
</div>
</section>
    )
}
