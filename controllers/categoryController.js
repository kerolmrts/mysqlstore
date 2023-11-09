const categoryData = require('../data/category');

const createCategory = async (category_name) => {

    try {
        const result = categoryData.createCategory(category_name)
        return result;
        
    } catch (error) {
        throw new Error("Erro ao inserir categoria. Detalhes: " + error.message);
    }

}

const deleteCategory= async(category_id) =>{
    try{
        const result= categoryData.deleteCategory(category_id);
        return result;

    }catch(error){
        throw new Error("Erro ao excluir categoria. Detalhes:" + error.message)

    }
}

module.exports = {
    createCategory,
    deleteCategory
}