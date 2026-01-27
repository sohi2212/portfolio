import { Icon } from "../../../../shared/ui";
import type { InfoItemData } from "./type";

export const items: InfoItemData[] = [
    {
        icon: <Icon height="123px" width="70px" src="/css-brands.svg" />,
        parts: [
            { text: "1+ Year ", accent: true },
            { text: "Coding Experience" }
        ]
    },
    {
        icon: <Icon height="123px" width="70px" src="/briefcase.svg" />,
        parts: [
            { text: "Working on " },
            { text: "2 Projects ", accent: true },
            { text: "now" },
        ]
    },
    {
        icon: <Icon height="123px" width="70px" src="/laptop-code.svg" />,
        parts: [
            { text: "In my free time I like to " },
            { text: "study new technologies", accent: true },
        ]
    }
]

export const title: InfoItemData = {
    parts: [
        { text: "What are " },
        { text: "my ", accent: true },
        { text: "strongest " },
        { text: "sides ", accent: true },
        { text: "and " },
        { text: "skills?", accent: true },
    ]
}