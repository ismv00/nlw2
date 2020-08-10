const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Igor Menezes',
        avatar: "https://avatars0.githubusercontent.com/u/62908769?s=460&u=43574b03334bdd852f33a9da1f0b447e5a9a3879&v=4" ,
        whatsapp: '92991588883' ,
        bio: 'Entusiasta das melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laborátório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.' ,
       
    }

    classValue = {
        subject:  1,
        cost: '20',
        
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // consultar todos os proffys
    const selectedProffys = await db.all('SELECT * FROM proffys')
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor 
    // e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, 8 -18
    // o Horário  do time from precisa ser menor ou igual ao horario solicitado 
    // o Time_to precisa ser acima 

    const selectClassesSchedules = await db.all(`
        select class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = '0'
        AND class_schedule.time_from <= '1300                  '
        AND class_schedule.time_to > '1300' 
    `)

    //console.log(selectClassesSchedules)
})