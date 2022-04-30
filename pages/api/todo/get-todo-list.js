import { supabase } from "../../../supabase"

async function handler(req, res) {
  const { user } = req.query
  if (req.method === 'GET') {
    try {
      let { data: todos, error } = await supabase
        .from('todos')
        .select()
        .eq('user', user)
        .order('id', { ascending: true })

      if (todos) {
        res.status(200).send({
          todos
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

  if (req.method === 'GET_TEST') {
    try {
      let { data: todos, error } = await supabase
        .from('todos')
        .select()
        .eq('user', user)
        .order('id', { ascending: true })

        return todos ? todos : error


    } catch (error) {
      return error
    }
  }
}

export default handler