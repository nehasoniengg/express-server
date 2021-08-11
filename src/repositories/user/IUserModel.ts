import IVersionableModel from '../versionable/IVersionableModel';
export default interface IuserModel extends IVersionableModel {
    id: string,
        name: string,
            email: string,
                password: string
}