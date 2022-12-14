import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Carlos Silva',
    //         email: 'caosdp@gmail.com',
    //         avatarURL: 'https://lh3.googleusercontent.com/a/ALm5wu3HxUmBB52HMgpt8vfskTfGHvrIRaj7U_7LFeFfRwI=s96-c',
    //         googleId: '117920678378733725370',
    //     }
    // })

    // const pool = await prisma.pool.create({
    //     data: {
    //         title: 'Bolão Seeder',
    //         code: 'BOL123',
    //         ownerId: user.id,
    //     }
    // })

    // const participant = await prisma.participant.create({
    //     data: {
    //         poolId: pool.id,
    //         userId: user.id
    //     }
    // })
    /*
    
    */

    /*
    
    */
    await prisma.game.create({
        data: {
            date: '2022-11-20T16:00:00Z',
            firstTeamCountryCode: 'QA',
            secondTeamCountryCode: 'EC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T13:00:00Z',
            firstTeamCountryCode: 'GB-ENG',
            secondTeamCountryCode: 'IR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T16:00:00Z',
            firstTeamCountryCode: 'SE',
            secondTeamCountryCode: 'NL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T19:00:00Z',
            firstTeamCountryCode: 'US',
            secondTeamCountryCode: 'GB-WLS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T10:00:00Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'SA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T13:00:00Z',
            firstTeamCountryCode: 'DK',
            secondTeamCountryCode: 'TN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T16:00:00Z',
            firstTeamCountryCode: 'MX',
            secondTeamCountryCode: 'PL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T19:00:00Z',
            firstTeamCountryCode: 'FR',
            secondTeamCountryCode: 'AU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T10:00:00Z',
            firstTeamCountryCode: 'MA',
            secondTeamCountryCode: 'HR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T13:00:00Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'JP',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T16:00:00Z',
            firstTeamCountryCode: 'ES',
            secondTeamCountryCode: 'HR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T19:00:00Z',
            firstTeamCountryCode: 'BE',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T10:00:00Z',
            firstTeamCountryCode: 'CH',
            secondTeamCountryCode: 'CM',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T13:00:00Z',
            firstTeamCountryCode: 'UY',
            secondTeamCountryCode: 'KR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T16:00:00Z',
            firstTeamCountryCode: 'PT',
            secondTeamCountryCode: 'GH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T19:00:00Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'RS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T10:00:00Z',
            firstTeamCountryCode: 'GB-WLS',
            secondTeamCountryCode: 'IR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T13:00:00Z',
            firstTeamCountryCode: 'QA',
            secondTeamCountryCode: 'SE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T16:00:00Z',
            firstTeamCountryCode: 'NL',
            secondTeamCountryCode: 'EC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T19:00:00Z',
            firstTeamCountryCode: 'GB-ENG',
            secondTeamCountryCode: 'US',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T10:00:00Z',
            firstTeamCountryCode: 'TN',
            secondTeamCountryCode: 'AU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T13:00:00Z',
            firstTeamCountryCode: 'PL',
            secondTeamCountryCode: 'SA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T16:00:00Z',
            firstTeamCountryCode: 'FR',
            secondTeamCountryCode: 'DK',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T19:00:00Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'MX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T10:00:00Z',
            firstTeamCountryCode: 'JP',
            secondTeamCountryCode: 'HR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T13:00:00Z',
            firstTeamCountryCode: 'BE',
            secondTeamCountryCode: 'MA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T16:00:00Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'CA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T19:00:00Z',
            firstTeamCountryCode: 'ES',
            secondTeamCountryCode: 'DE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T10:00:00Z',
            firstTeamCountryCode: 'CM',
            secondTeamCountryCode: 'RS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T13:00:00Z',
            firstTeamCountryCode: 'KR',
            secondTeamCountryCode: 'GH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T16:00:00Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'CH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T19:00:00Z',
            firstTeamCountryCode: 'PT',
            secondTeamCountryCode: 'UY',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T15:00:00Z',
            firstTeamCountryCode: 'NL',
            secondTeamCountryCode: 'QA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T15:00:00Z',
            firstTeamCountryCode: 'EC',
            secondTeamCountryCode: 'SE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T19:00:00Z',
            firstTeamCountryCode: 'IR',
            secondTeamCountryCode: 'US',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T19:00:00Z',
            firstTeamCountryCode: 'GB-WLS',
            secondTeamCountryCode: 'GB-ENG',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T15:00:00Z',
            firstTeamCountryCode: 'TN',
            secondTeamCountryCode: 'FR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T15:00:00Z',
            firstTeamCountryCode: 'AU',
            secondTeamCountryCode: 'DK',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T19:00:00Z',
            firstTeamCountryCode: 'PL',
            secondTeamCountryCode: 'AR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T19:00:00Z',
            firstTeamCountryCode: 'SA',
            secondTeamCountryCode: 'MX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T15:00:00Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'BE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T15:00:00Z',
            firstTeamCountryCode: 'CA',
            secondTeamCountryCode: 'MA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T19:00:00Z',
            firstTeamCountryCode: 'HR',
            secondTeamCountryCode: 'DE',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T19:00:00Z',
            firstTeamCountryCode: 'JP',
            secondTeamCountryCode: 'ES',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T15:00:00Z',
            firstTeamCountryCode: 'KR',
            secondTeamCountryCode: 'PT',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T15:00:00Z',
            firstTeamCountryCode: 'GH',
            secondTeamCountryCode: 'UY',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T19:00:00Z',
            firstTeamCountryCode: 'RS',
            secondTeamCountryCode: 'CH',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T19:00:00Z',
            firstTeamCountryCode: 'CM',
            secondTeamCountryCode: 'BR',
        }
    })
    // await prisma.game.create({
    //     data: {
    //         date: '2022-11-04T12:00:00.201Z',
    //         firstTeamCountryCode: 'AR',
    //         secondTeamCountryCode: 'BR',
    //         // guesses:{
    //         //     create: {
    //         //         firstTeamPoint:2,
    //         //         secondTeamPoint:3,
    //         //         participant: {
    //         //             connect:{
    //         //                 userId_poolId:{
    //         //                     userId: user.id,
    //         //                     poolId: pool.id,
    //         //                 }
    //         //             }
    //         //         }
    //         //     }
    //         // }
    //     }
    // })

}
main()