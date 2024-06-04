const express = require('express');
const Mahasiswa = require('../models/Mahasiswa');
const Dosen = require('../models/Dosen');
const router = express.Router();


//mahasiswa
router.get('/mahasiswa', async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find();
        res.json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/mahasiswa',async(req,res)=>{
    try {
        console.log(req.body);
        const mahasiswa = new Mahasiswa({
            nama: req.body.nama,
            npm : req.body.npm,
            prodi : req.body.prodi,
        });

        const addMahasiswa = await mahasiswa.save()

        res.json({
            message: 'berhasil hore',
            data : addMahasiswa
        })

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/mahasiswa/edit/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        
        const editMahasiswa = await Mahasiswa.findByIdAndUpdate(id,body)
        const mahasiswa = await Mahasiswa.findById(id)

        res.json({
            message: "Berhasil update",
            data : mahasiswa 
        })
        console.log("berhasil")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/mahasiswa/delete/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        // const body = req.body;
        
        const deleteMahasiswa = await Mahasiswa.findByIdAndDelete(id)

        res.json({
            message: "Berhasil menghapus data",
            data : deleteMahasiswa 
        })
        console.log("berhasil")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//dosen
router.get('/dosen', async (req, res) => {
    try {
        const dosen = await Dosen.find();
        res.json(dosen);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/dosen',async(req,res)=>{
    try {
        console.log(req.body);
        const dosen = new Dosen({
            nama: req.body.nama,
            matkul_diampu : req.body.matkul_diampu,
            alamat : req.body.alamat,
        });

        const addDosen = await dosen.save()

        res.json({
            message: 'berhasil hore',
            data : addDosen
        })

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/dosen/edit/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        
        const editDosen = await Dosen.findByIdAndUpdate(id,body)
        const dosen = await Dosen.findById(id)

        res.json({
            message: "Berhasil update",
            data : dosen 
        })
        console.log("berhasil")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/dosen/delete/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        // const body = req.body;
        
        const deleteDosen = await Dosen.findByIdAndDelete(id)

        res.json({
            message: "Berhasil menghapus data",
            data : deleteDosen 
        })
        console.log("berhasil")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


module.exports = router;