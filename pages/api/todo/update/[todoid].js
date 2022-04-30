import { supabase } from "../../../../supabase"

async function updateHandler(req, res) {
    let { todoid } = req.query
    let  dataToUpdate = req.body

    if (req.method === 'PATCH') {
        try {
            const { data: newtodo, error } = await supabase
                .from('todos')
                .update({ completed: !dataToUpdate.completed })
                .eq('id', todoid)

            if (newtodo) {
                res.status(200).send({
                    newtodo
                })
            } else {
                res.status(500).send({
                    error
                })
            }
        } catch (error) {
            res.status(500).send({
                error
            })
        }
    }
    if (req.method === 'PUT') {
        try {
            const { data: newtodo, error } = await supabase
                .from('todos')
                .update({
                    completed: dataToUpdate.completed,
                    title: dataToUpdate.title,
                    description: dataToUpdate.description
                })
                .eq('id', todoid)

            if (newtodo) {
                res.status(200).send({
                    newtodo
                })
            } else {
                res.status(500).send({
                    error
                })
            }
        } catch (error) {
            res.status(500).send({
                error
            })
        }
    }
}

export default updateHandler