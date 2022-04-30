import { supabase } from "../../../../supabase"

async function deleteTodoHandler(req, res) {
  const { todoid } = req.query

  if (req.method === 'DELETE') {
    try {
      const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', todoid)

      if (data) {
        res.status(200).send({
          data
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

export default deleteTodoHandler