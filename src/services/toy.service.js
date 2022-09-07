import { storageService } from './async-storage.service.js'


export const toyService = {
    getById,
    remove,
    save,
    query
}


const STORAGE_KEY = 'toyDB'

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}


function query() {
    return storageService.query(STORAGE_KEY)
        .then(toys => {
            if (!toys || !toys.length) {
                storageService.postMany(STORAGE_KEY, gToys)
                toys = gToys
            }
            return toys
        })
}

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]
const gToys = [
    {
        "_id": "6318f6aa86b5eaee74b51b2e",
        "inStock": false,
        "price": "2,202.50",
        "name": "Kristi Cantrell",
        "createdAt": "2022-01-29T04:21:18 -02:00",
        "labels": [
            "enim",
            "aute",
            "commodo",
            "fugiat"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Eiusmod esse cillum sit reprehenderit et Lorem deserunt eiusmod quis sunt aute quis occaecat enim. Est ad mollit magna laboris nulla sunt nostrud irure tempor nostrud fugiat deserunt duis ex. Quis deserunt dolor ipsum do adipisicing. Nisi esse laboris incididunt amet laborum nulla. Et tempor duis in dolor nulla anim reprehenderit aliquip nostrud qui amet fugiat id. Nisi occaecat eu cillum ea qui est.\r\n"
    },
    {
        "_id": "6318f6aa2b16eda394591810",
        "inStock": false,
        "price": "1,363.92",
        "name": "Riddle Blackburn",
        "createdAt": "2021-07-20T01:42:15 -03:00",
        "labels": [
            "proident",
            "velit",
            "cillum",
            "magna"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Labore non veniam ipsum non ut non deserunt in nulla minim laboris aliquip. Officia fugiat pariatur voluptate quis consequat et ipsum excepteur deserunt ullamco ea anim consequat reprehenderit. Aute cupidatat esse do non tempor adipisicing laboris ex reprehenderit cillum duis eu.\r\n"
    },
    {
        "_id": "6318f6aa33d990d977763955",
        "inStock": false,
        "price": "2,223.60",
        "name": "Owens Spears",
        "createdAt": "2019-07-28T02:24:02 -03:00",
        "labels": [
            "est",
            "nisi",
            "excepteur",
            "mollit"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Dolor cillum in aliqua sint dolor. Proident velit adipisicing tempor deserunt eiusmod sit incididunt est velit incididunt laborum. Voluptate ea Lorem sint consequat do nulla ad cillum fugiat cillum nostrud eu sint. Dolor exercitation deserunt ad adipisicing qui aute sit. Commodo reprehenderit elit incididunt sunt nisi commodo non nostrud. Lorem occaecat commodo et culpa ad culpa magna Lorem sint.\r\n"
    },
    {
        "_id": "6318f6aa62f00e761baeaa7c",
        "inStock": false,
        "price": "3,016.00",
        "name": "Kirby Ochoa",
        "createdAt": "2016-03-01T05:08:03 -02:00",
        "labels": [
            "eiusmod",
            "amet",
            "sunt",
            "irure"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Exercitation enim consequat cupidatat irure esse reprehenderit sunt eiusmod do sint velit qui fugiat. Aute amet velit cupidatat excepteur. Elit quis ut nisi velit anim nostrud excepteur. Qui in cillum fugiat et pariatur deserunt irure culpa incididunt nulla ullamco nulla consequat. Sint ea id officia enim dolore. Incididunt eu eiusmod magna occaecat sit. Enim officia occaecat id minim proident commodo ullamco magna ex enim proident cillum nulla sit.\r\n"
    },
    {
        "_id": "6318f6aa2a6bee53f01f6532",
        "inStock": true,
        "price": "3,286.20",
        "name": "Payne Marks",
        "createdAt": "2022-01-19T04:36:10 -02:00",
        "labels": [
            "nulla",
            "voluptate",
            "ad",
            "non"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Cupidatat incididunt enim esse ex consequat occaecat irure non quis consequat exercitation veniam tempor. Pariatur occaecat dolor incididunt ex aliqua Lorem ad sunt. Reprehenderit voluptate cillum ex eiusmod duis voluptate proident enim reprehenderit culpa fugiat. Sunt do amet incididunt nostrud Lorem proident culpa commodo.\r\n"
    },
    {
        "_id": "6318f6aa985131acc3896340",
        "inStock": false,
        "price": "3,612.01",
        "name": "Jami Turner",
        "createdAt": "2015-04-23T07:40:27 -03:00",
        "labels": [
            "ullamco",
            "elit",
            "laborum",
            "consectetur"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Cillum occaecat aute proident commodo ipsum non irure nisi id dolore Lorem. Labore ut eu ipsum incididunt qui enim aliqua Lorem quis et voluptate irure velit. Laborum deserunt est est ad ut culpa ad exercitation fugiat sit nulla. Ex dolore ea veniam consequat minim nostrud culpa tempor amet. Non ad elit ullamco deserunt enim id ad consequat esse ullamco cupidatat esse ad. Id minim occaecat fugiat esse quis in enim. Mollit incididunt cillum enim ut ad.\r\n"
    },
    {
        "_id": "6318f6aa7f63e741e5e6ffc6",
        "inStock": false,
        "price": "2,949.77",
        "name": "Le Mcguire",
        "createdAt": "2019-06-09T06:20:32 -03:00",
        "labels": [
            "aute",
            "cillum",
            "dolor",
            "velit"
        ],
        "picture": "http://placehold.it/32x32",
        "desc": "Anim consequat esse sint qui commodo ex do. In ullamco Lorem ex aliqua consequat id anim esse. Laboris duis officia fugiat pariatur fugiat consectetur anim aute culpa sunt. Cupidatat minim ut non quis exercitation ad. Dolor deserunt ut sint ea ullamco sit qui commodo. Sunt velit nisi laboris est aute nostrud eu ad incididunt pariatur. Qui consequat consectetur elit amet.\r\n"
    }
]