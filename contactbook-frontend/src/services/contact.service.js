import contactAPIClient from "./api.service";

class ContactService {
    constructor(baseURL = "/api/contacts") {
        this.api = contactAPIClient(baseURL);
    }

    async getAll(name = []) {
        return (await this.api.get(`/${name}`)).data
    }

    async create(data) {
        return (await this.api.post("/", data)).data
    }

    async deleteAll() {
        return (await this.api.detele("/")).data
    }

    async updateAll(data) {
        return (await this.api.put('/', data)).data
    }


    async getAllFavorite() {
        return (await this.api.get('/favorite')).data
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data
    }

    async update(id, data) {
        return (await this.api.put(`/${id}`, data))
    }

    async delete (id) {
        return (await this.api.delete(`${id}`)).data
    }
}

export default new ContactService();