import handler from '../../pages/api/todo/get-todo-list'
import chai from 'chai'
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);

test("get list of tasks", (done) => {

    const mockResponse = () => {
        const res = {};
        res.status = jest.fn(() => {
            res = {}
            res.send = jest.fn().mockReturnValue(res)
            return res
        }).mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        return res;
    };



    const req = {
        method: "GET_TEST",
        query: {
            user: "che.manuel758"
        }
    }

    const res = mockResponse()

    expect(handler(req, res)).resolves.should.be.a('object')

    done()

})