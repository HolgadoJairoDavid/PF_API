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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const validations_1 = require("../helpers/validations");
const mongoose_1 = __importDefault(require("mongoose"));
let User = exports.User = class User {
};
__decorate([
    (0, typegoose_1.prop)({ required: true, unique: true, lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, set: (val) => val.toLowerCase().split(' ').map(s => s[0].toUpperCase() + s.substring(1)).join(' ') }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ set: (val) => val.toLowerCase().split(' ').map(s => s[0].toUpperCase() + s.substring(1)).join(' ') }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "cohort", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "group", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date
    // país
    )
], User.prototype, "birthdate", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typegoose_1.prop)({ allowMixed: typegoose_1.Severity.ALLOW, type: () => mongoose_1.default.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], User.prototype, "authMethod", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isBanned", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: { test: 'required_property' }, allowMixed: typegoose_1.Severity.ALLOW, type: () => mongoose_1.default.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], User.prototype, "newMessages", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 'offline' }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isTA", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "TAcohort", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "TAgroup", void 0);
exports.User = User = __decorate([
    (0, typegoose_1.pre)('save', function (next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar alguna condición antes de permitir el guardado
                if (!(0, validations_1.isCohortValid)(this.cohort)) {
                    throw new Error('Cohort Name not allowed. Cannot save the document.');
                }
                this.cohort = this.cohort.toLocaleLowerCase();
                // Si no hay errores, llamar a `next` para continuar con el proceso de guardado
                next();
            }
            catch (error) {
                // Si hay un error, llamar a `next` con el error para evitar el guardado
                next(error);
            }
        });
    })
], User);
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.default = UserModel;
