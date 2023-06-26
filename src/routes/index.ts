import {Router} from 'express'
import authRouter from './auth.routes'
import userRouter from './user.routes'
import cohortRouter from './cohort.routes'
import groupRouter from './group.routes'
import gameRouter from './game.routes'
import rankingRouter from './ranking.routes'
import userGameRouter from './userGame.routes'
import payment from './payment.routes'
import devRouter from './dev.routes'
import chatRouter from './chat.route'

const router = Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/cohort', cohortRouter)
router.use('/group', groupRouter)
router.use('/game', gameRouter)
router.use('/ranking', rankingRouter)
router.use('/payment', payment)
router.use('/usergame', userGameRouter)
router.use('/dev', devRouter)
router.use('/chat', chatRouter)
export default router