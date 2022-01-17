export const getOne = (model:any) => async (req:any, res:any) => {}

export const getMany = (model:any) => async (req:any, res:any) => {}


export const createOne = (model:any) => async (req:any, res:any) => {}


export const updateOne = (model:any) => async (req:any, res:any) => {}


export const removeOne = (model:any) => async (req:any, res:any) => {}


export const crudControllers = (model:any) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
