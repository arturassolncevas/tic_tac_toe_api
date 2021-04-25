import chai from 'chai'
import chaiHttp from 'chai-http'
import Game from '../../src/models/game'
import { webServer } from '../../src/app'

const mochaAsync = (fn) => (done) => {
  fn.call().then(done, (err) => {
    done(err)
  })
}

const getLastGame = () => Game.query()
  .orderBy('id', 'desc')
  .limit(1)
  .first()

const url = '/api/v1/games'

chai.should()
chai.use(chaiHttp)

describe('Games api/controller', () => {
  beforeEach(mochaAsync(async () => {
    await Game.query().delete()
  }))

  describe('/POST game', () => {
    it('it should create game and return log', mochaAsync(async () => {
      const body = { boardSize: 3 }
      const res = await chai.request(webServer)
        .post(url)
        .send(body)

      res.should.have.status(200)
      res.body.should.be.a('object')
      res.body.should.have.property('id')
      res.body.should.have.property('log')
      res.body.log.should.have.property('type')
        .eq(2)
      res.body.log.should.have.property('message')
        .eq(`Game ${res.body.id}: status - started`)

      const game = await getLastGame()

      chai.assert.isObject(game)
      chai.assert.equal(res.body.id, game.id)
    }))
  })
})
