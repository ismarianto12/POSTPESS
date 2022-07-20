import { mysql } from '../../helpers/db'
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            let results = await mysql.query('SELECT * FROM jenis')
            await mysql.end()
            return res.status(200).json({ data: results })
            break;

        case 'POST':
            return inserData(req, res);
            break;

        case 'PUT':
            return updateData(req, res);
            break;
        case 'DELETE':
            return deleteData(req, res);

            break;

        default:
            return res.status(200).json(
                'unxpected page display'
            )
            break;
    }

    async function inserData(req, res) {
        await mysql.query('INSERT INTO jenis set ? ', [
            req.body
        ])
        await mysql.end()
        return res.status(200).json({ rest: 'data berhasil di simpan' })
    }

    async function getAll() {
        let results = await mysql.query('SELECT * FROM jenis')
        await mysql.end()
        return res.status(200).json({ data: results })
    }
    async function updateData(req, res) {
        let results = await mysql.query(`update jenis set
                    jenis = "${req.body.jenis}",
                    kode = "${req.body.kode}",
                where id = ${req.body.id},    
        
        `)
        await mysql.end()
        return res.status(200).json({ data: results })
    }
    async function deleteData(req, res) {
        await mysql.query('delete from jenis where id = ? ', [
            req.body.id
        ])
        await mysql.end()
        return res.status(200).json({ ket: 'data berhasil di hapus' })
    }

}