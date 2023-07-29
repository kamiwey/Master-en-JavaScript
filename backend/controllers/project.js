"use strict";

const project = require("../models/project");
var Project = require("../models/project");
var fs = require('fs');
var path = require('path');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: "Soy la home carajo de dios",
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: "Soy el metodo o accion test",
        });
    },

    saveProjec: async function (req, res) {
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        try {
            await project.save();
            return res.status(200).send({ message: "proyecto guardado", project });
        } catch (err) {
             return res
            .status(404)
            .send({ message: "El proyecto no existe", error: err });
        }
    },

    getProject: async function (req, res) {
        var projectId = req.params.id;

        if (projectId == null)
            return res.status(404).send({ message: "El proyecto no existe" });

        try {
            const project = await Project.findById(projectId);
        if (!project)
            return res.status(404).send({ message: "El proyecto no existe" });
            return res.status(200).send({ project });
        } catch (err) {
            return res.status(500).send({ message: "Error al devolver los datos" });
        }
    },

    getProjects: async function (req, res) {
        try {
            project
            .find()
            .sort("-year")
            .then((projects) => {
                return res.status(200).send({ projects });
            });
        } catch (err) {
            return res.status(404).send({ message: "error" });
        }
    },

    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true })
            .then((projectUpdated) => {
                return res.status(200).send({
                    project: projectUpdated,
                });
            })
            .catch(() => {
                return res
                .status(404)
                .send({ message: "Proyecto no encontrado para actualizar." });
            });
    },

    deleteProject: function (req, res) {
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId, { new: true })
            .then((projectRemoved) => {
                return res.status(200).send({
                project: projectRemoved,
                });
            })
            .catch((err, projectRemoved) => {
                if (err)
                    return res
                    .status(500)
                    .send({ message: "No se pudo eliminar el proyecto." });

                if (!projectRemoved)
                    return res
                    .status(404)
                    .send({
                    message: "No se pudo encontrar el proyecto para ser eliminado."});
        });
    },

    // uploadImage: function (req, res) {
    //     var projectId = req.params.id;
    //     var fileName = "Imagen no subida...";

    //     if (req.file) {
    //         // console.log(req.file);

    //         var file_path = req.file.path;
    //         var file_split = file_path.split("\\");
    //         var file_name = file_split[2];
    //         var ext_split = req.file.originalname.split(".");
    //         var file_ext = ext_split[1];

    //         if (file_ext == "png" || file_ext == "gif" || file_ext == "jpg") {
    //             Project.findByIdAndUpdate(projectId, { image: file_name }, {new: true}, (err, projectUpdated) => {
    //                 if (!projectUpdated) {
    //                     res.status(404)
    //                     .send({ message: "No se ha podido actualizar el album" });
    //                 } else {
    //                     res.status(200).send({ album: projectUpdated });
    //                 }
    //             });
    //         } else {
    //             res.status(200).send({ message: "Extension del archivo no valida" });
    //         }

    //         console.log(file_path);
    //     } else {
    //         res.status(200).send({ message: "No has subido ninguna imagen.." });
    //     }
    //  api.post('/upload-image-album/:id', [md_auth.ensureAuth, mul_upload.single('image')], AlbumController.uploadImage);
    // },


    uploadImage: function (req, res) {
        var projectId = req.params.id;
        var file_name = "Imagen no subida...";

        if (req.file) {
            console.log(req.file);

            var file_path = req.file.path;
            var file_split = file_path.split("\\");
            var file_name = file_split[1];
            var ext_split = req.file.originalname.split("\.");
            // var ext_split = req.file.originalname.split(".");
            var file_ext = ext_split[1];
            // file_name = file_name + "." + file_ext;

            if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){

                Project.findByIdAndUpdate(projectId, { image: file_name }, {new: true}) 
                .then((projectUpdated) => {
                    return res.status(200).send({album: projectUpdated});
                })
                .catch(() => {
                    return res.status(404)
                    .send({ message: "No se ha podido actualizar el album" });
                }) 

                console.log(file_path);
                console.log(file_split);
                console.log(file_name);
                // console.log(ext_split);
                console.log(file_ext);
                
            } else {
                res.status(200).send({ message: "No has subido ninguna imagen.." });
            }
    //  api.post('/upload-image-album/:id', [md_auth.ensureAuth, mul_upload.single('image')], AlbumController.uploadImage);
        }
    },









    getImageFile: function (req, res) {
        var file = req.params.image;
        var path_file = "./uploads/" + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return req.status(200).send({
                    message: "No existe la imagen...",
                });
            }
        });
    },
};

module.exports = controller;
