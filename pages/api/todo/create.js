import { supabase } from "../../../supabase"

async function getTodoHandler(req, res) {
  const { task, user } = req.body

  if (req.method === 'POST') {
    try {
      const { data: newtodo, error } = await supabase
        .from('todos')
        .insert([
          { ...task, user: user.nickname },
        ])

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

export default getTodoHandler