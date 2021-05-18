import {v1} from "uuid";
import {data} from "../db/phoneBookSubscribers";

export const phonebookAPI = {
    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 300);
        });
    },
    create(name, number) {
        const newSubscriber = {
            id: v1(),
            name: name,
            number: number
        };
        data.push(newSubscriber);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: newSubscriber
                });
            }, 300);
        });
    },
    update(id, name, number) {
        const indexSubscriber = data.findIndex((el) => el.id === id);
        const changedSubscriber = {
            id,
            name,
            number
        };

        data.splice(indexSubscriber, 1, changedSubscriber);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: changedSubscriber
                });
            }, 300);
        });
    },
    delete(id) {
        const indexSubscriber = data.findIndex((el) => el.id === id);
        const deletedSubscriberArr = data.splice(indexSubscriber, 1);
        const deletedSubscriber = deletedSubscriberArr[0];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(deletedSubscriber);
            }, 300);
        });
    }
};