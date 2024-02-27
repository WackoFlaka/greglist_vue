export class Cars {
    constructor(data) {
        this.id = data.id || data._id
        this.model = data.model
        this.make = data.make
        this.year = data.year
        this.imgUrl = data.imgUrl
        this.description = data.description
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.engineType = data.engineType
        this.creator = data.creator
    }
}