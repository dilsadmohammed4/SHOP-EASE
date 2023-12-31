import {Router, Request, Response} from "express";
import {tokenMiddleware} from "../../middlewares/tokenMiddleware";
import * as productController from "../../controllers/productController";
import {body} from "express-validator";
import {validateForm} from "../../middlewares/validateForm";

const productRouter: Router = Router();

/**
 * @usage : create a product
 * @url : http://localhost:9000/api/products
 * @param : title, description, imageUrl, brand, price, quantity, categoryId, subCategoryId
 * @method : POST
 * @access : PRIVATE
 */
productRouter.post(
    "/",
    [
        body("title").not().isEmpty().withMessage("title is required"),
        body("description").not().isEmpty().withMessage("description is required"),
        body("imageUrl").not().isEmpty().withMessage("imageUrl is required"),
        body("brand").not().isEmpty().withMessage("brand is required"),
        body("price").not().isEmpty().withMessage("price is required"),
        body("quantity").not().isEmpty().withMessage("quantity is required"),
        body("categoryId").not().isEmpty().withMessage("categoryId is required"),
        body("subCategoryId")
            .not()
            .isEmpty()
            .withMessage("subCategoryId is required"),
    ],
    tokenMiddleware,
    validateForm,
    async (request: Request, response: Response) => {
        await productController.createProduct(request, response);
    }
);
export default productRouter;

/**
 * @usage : Update a product
 * @url : http://localhost:9000/api/products/:productId
 * @param : title, description, imageUrl, brand, price, quantity, categoryId, subCategoryId
 * @method : PUT
 * @access : PRIVATE
 */
productRouter.put(
    "/:productId",
    [
        body("title").not().isEmpty().withMessage("title is required"),
        body("description").not().isEmpty().withMessage("description is required"),
        body("imageUrl").not().isEmpty().withMessage("imageUrl is required"),
        body("brand").not().isEmpty().withMessage("brand is required"),
        body("price").not().isEmpty().withMessage("price is required"),
        body("quantity").not().isEmpty().withMessage("quantity is required"),
        body("categoryId").not().isEmpty().withMessage("categoryId is required"),
        body("subCategoryId")
            .not()
            .isEmpty()
            .withMessage("subCategoryId is required"),
    ],
    tokenMiddleware,
    validateForm,
    async (request: Request, response: Response) => {
        await productController.updateProduct(request, response);
    }
);

/**
 * @usage : Get all product
 * @url : http://localhost:9000/api/products
 * @param : no-params
 * @method : GET
 * @access : PRIVATE
 */
productRouter.get(
    "/",
    tokenMiddleware,
    async (request: Request, response: Response) => {
        await productController.getAllProducts(request, response);
    }
);

/**
 * @usage : Get a product
 * @url : http://localhost:9000/api/products/:productId
 * @param : no-params
 * @method : GET
 * @access : PRIVATE
 */
productRouter.get(
    "/:productId",
    tokenMiddleware,
    async (request: Request, response: Response) => {
        await productController.getProduct(request, response);
    }
);

/**
 * @usage : Delete a product
 * @url : http://localhost:9000/api/products/:productId
 * @param : no-params
 * @method : DELETE
 * @access : PRIVATE
 */
productRouter.delete(
    "/:productId",
    tokenMiddleware,
    async (request: Request, response: Response) => {
        await productController.deleteProduct(request, response);
    }
);

/**
 * @usage : Get all products with category id
 * @url : http://localhost:9000/api/products/categories/:categoryId
 * @param : no-params
 * @method : GET
 * @access : PRIVATE
 */
productRouter.get(
    "/categories/:categoryId",
    tokenMiddleware,
    async (request: Request, response: Response) => {
        await productController.getAllProductWithCategoryId(request, response);
    }
);
