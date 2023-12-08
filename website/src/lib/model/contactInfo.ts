export interface ContactInfo {
    title: string;
    data: string;
    clickEvent: ContactClickEvent;
    svgName: string;
}

export enum ContactClickEvent {
    Url,
    Copy,
}

export function getContactInfoFromJSON(data: string): ContactInfo {
    let jsonData: {
        title: string;
        data: string;
        clickEvent: string;
        svgName: string;
    } = JSON.parse(data);

    let clickEvent: ContactClickEvent;

    switch (jsonData.clickEvent) {
        case "Url": {
            clickEvent = ContactClickEvent.Url;
            break;
        }
        case "Copy": {
            clickEvent = ContactClickEvent.Copy;
            break;
        }
        default: {
            clickEvent = ContactClickEvent.Url;
            break;
        }
    }

    return {
        title: jsonData.title,
        data: jsonData.data,
        svgName: jsonData.svgName,
        clickEvent: clickEvent,
    };
}
