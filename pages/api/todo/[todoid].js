import { supabase } from "../../../supabase"

async function getTodoHandler(req, res) {
  const { todoid } = req.query

  if (req.method === 'GET') {
    try {
      let { data: todo, error } = await supabase
        .from('todos')
        .select()
        .eq('id', todoid)

      if (todo) {
        res.status(200).send({
          todo
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

export default getTodoHandler