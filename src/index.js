import "./styles.css";

import createNav from "./modules/UI";
import { createProjects } from "./modules/UI";
import { initializeDefaultProject } from "./modules/logic";
import { renderProjects } from "./modules/UI";
//import { renderProjects } from "./modules/UI";

/* HOW AN ARRAY OF OBJECT SHOULD LOOK LIKE

let TODO = [
    {
        name: "Default Project",
        tasks: [
            { name: "Do homework", priority: "first" },
            { name: "Do the laundry", priority: "second" }
            ]
            },
            {
                name: "First Project",
                tasks: [
                    { name: "Pay the bills", priority: "first" },
                    { name: "Call a mechanic", priority: "second" }
                    ]
                    }
                    ];
                    */
createNav();
//createProjects();
initializeDefaultProject();
renderProjects();
//getLastAddedProject();
//renderProjects();
