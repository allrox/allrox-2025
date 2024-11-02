import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Workflow() {
    return (
        <div className="rounded-lg text-white text-lg">
            <Accordion className="flex flex-col">
                <AccordionItem key="1" aria-label="Atendimento" title="Atendimento" indicator=" " className="accordion-item text-[#00d9ff]">
                    <p className="text-white">Cada empresa é única, por isso, começamos com a identificação da necessidade real do seu negócio.</p>
                </AccordionItem>

                <AccordionItem key="2" aria-label="Análise técnica" title="Análise técnica" indicator=" " className="accordion-item text-[#00d9ff]">
                    <p className="text-white">Depois de compreender a demanda, analisamos a viabilidade técnica para a entrega do seu projeto.</p>
                </AccordionItem>

                <AccordionItem key="3" aria-label="Apresentação e aprovação da proposta" indicator=" " title="Apresentação e aprovação da proposta" className="accordion-item text-[#00d9ff]">
                    <p className="text-white">A partir do briefing e análise de viabilidade, elaboramos uma proposta comercial, para dar início ao projeto.</p>
                </AccordionItem>
            </Accordion>
        </div>
    );
}