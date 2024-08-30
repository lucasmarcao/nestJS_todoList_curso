"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("../entities/todo.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TodoRepository = class TodoRepository extends typeorm_1.Repository {
    constructor(repository) {
        super(repository.target, repository.manager);
    }
    async getOneById(id) {
        const entity = await this.findOneBy({
            id,
        });
        if (!entity)
            throw new Error('item com esse id nao existe no banco de dados');
        return entity;
    }
    async list(params) {
        const where = {};
        if (params.createdAt) {
            const startOfDay = new Date(params.createdAt);
            startOfDay.setHours(0);
            startOfDay.setMinutes(0);
            startOfDay.setSeconds(0);
            startOfDay.setMilliseconds(0);
            const endOfDay = new Date(params.createdAt);
            endOfDay.setHours(23);
            endOfDay.setMinutes(59);
            endOfDay.setSeconds(59);
            endOfDay.setMilliseconds(999);
            where['createdAt'] = (0, typeorm_1.Between)(startOfDay, endOfDay);
        }
        if (params.dificult) {
            where['dificult'] = params.dificult;
        }
        if (params.completed) {
            where['completed'] = params.completed;
        }
        if (params.search) {
            where['text'] = (0, typeorm_1.ILike)(`%${params.search}%`);
        }
        const skip = (params.page - 1) * params.perPage;
        const entities = await this.find({
            where,
            skip,
            order: {
                complete: 'ASC',
                createdAT: 'DESC',
            },
        });
        return entities;
    }
    async registerItem(input) {
        const entity = this.create(input);
        await this.save(entity);
        return entity;
    }
};
exports.TodoRepository = TodoRepository;
exports.TodoRepository = TodoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(todo_entity_1.TodoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TodoRepository);
//# sourceMappingURL=todo.repositores.js.map