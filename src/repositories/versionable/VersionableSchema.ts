import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collections: any) {
        const versionedOptions = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
                },
            createdBy: {
                default: 'Neha Soni',
                required: true,
                type: String,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            deletedBy: {
                optional: true,
                type: String,
            },
            originalId: {
                required: true,
                type: String,
            },
            role: {
                required: true,
                type: String,
            },
            updatedAt: {
                default: Date.now,
                required: true,
                type: String,
            },
            updatedBy: {
                default: 'Neha Soni',
                required: true,
                type: String,
            },
        }, options);
        super(versionedOptions, collections);

    }
}