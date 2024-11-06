import { useState } from "react";

export default function WorkflowProcess() {
    const lines = "accordion-item mb-1";
    const title = "text-md font-medium text-[#00d9ff] mb-2";
    const content = "";
    const toggleArea = "flex flex-row cursor-pointer";
    const icon = (index) => `bi ${openSection === index ? "bi-arrow-down-short" : "bi-arrow-right-short"} text-[#00d9ff] me-4`;
    const [openSection, setOpenSection] = useState(1);
    const toggleSection = (index) => {
        setOpenSection((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="rounded-lg text-white text-lg">
            <ul className="flex flex-col">
                <li key="1" className={lines}>
                    <div className={toggleArea} onClick={() => toggleSection(1)}>
                        <i className={icon(1)} />
                        <p className={title}>Atendimento</p>
                    </div>
                    {openSection === 1 && (
                        <p className={content}>
                            Cada empresa é única, por isso, começamos com a identificação da necessidade real do seu negócio.
                        </p>
                    )}
                </li>

                <li key="2" className={lines}>
                    <div className={toggleArea} onClick={() => toggleSection(2)}>
                        <i className={icon(2)} />
                        <p className={title}>Análise técnica</p>
                    </div>
                    {openSection === 2 && (
                        <p className={content}>
                            Depois de compreender a demanda, analisamos a viabilidade técnica para a entrega do seu projeto.
                        </p>
                    )}
                </li>

                <li key="3" className={lines}>
                    <div className={toggleArea} onClick={() => toggleSection(3)}>
                        <i className={icon(3)} />
                        <p className={title}>Proposta de negócio</p>
                    </div>
                    {openSection === 3 && (
                        <p className={content}>
                            A partir do briefing e análise de viabilidade, elaboramos uma proposta comercial, para dar início ao projeto.
                        </p>
                    )}
                </li>
            </ul>
        </div>
    );
}