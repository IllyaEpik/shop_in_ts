import { Router } from 'express';
import { CategoryController } from './categoryController';

const router = Router();
const categoryController = new CategoryController();

router.post('/', (req, res) => categoryController.create(req, res));
router.get('getAll/', (req, res) => categoryController.findAll(req, res));
router.get('getById/:id', (req, res) => categoryController.findById(req, res));
router.put('/:id', (req, res) => categoryController.update(req, res));
router.delete('/:id', (req, res) => categoryController.delete(req, res)); 

export const categoryRouter = router;