<?php

namespace App\Controller;

use App\Entity\Ordinateur;
use App\Entity\Attribution;


use App\Form\OrdinateurType;
use App\Repository\OrdinateurRepository;
use Attribute;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Constraints\Length;

/**
 * @Route("/api/ordinateur")
 */
class OrdinateurController extends AbstractController
{
    /**
     * @Route("/show", name="ordinateur_index", methods={"POST"})
     */
    public function index(SerializerInterface $serializer, OrdinateurRepository $ordinateurRepository): Response
    {

        // return $this->render('ordinateur/index.html.twig', [
        //     'ordinateurs' => $ordinateurRepository->findAll(),
        // ]);

        // $result = $serializer->normalize($level1, null, [AbstractObjectNormalizer::ENABLE_MAX_DEPTH => true]);

        $q = $ordinateurRepository->findAll();

        // $array = [];

        // foreach ($q as $value) {

        //     // print($value->getId());

        //     $array =
        //     $text = $text . '{"id": ' . $value->getId() . ',';
        //     $text = $text . '"nom": ' . $value->getNom() . ',';
        //     $text = $text . '"aled": aled },';
        // }

        $array = ['foo' => 'bar', 'quux' => 'baz', 'tab' => ['val1' => 2, 'val2' => 12]  ];

        $t = json_encode($array, JSON_PRETTY_PRINT);

        //  print_r ($t);

        // return new Response ('oui');

        $r = $serializer->serialize($q, 'json');

        return new JsonResponse($r, 200, [], true);



        // --- test



        // $category = new Ordinateur();
        // $category->setNom('pc2');

        // $product = new Attribution();
        // $product->setName('Keyboard');
        // $product->setPrice(19.99);
        // $product->setDescription('Ergonomic and stylish!');

        // // relates this product to the category
        // $product->setCategory($category);

        // $entityManager = $this->getDoctrine()->getManager();
        // $entityManager->persist($category);
        // $entityManager->persist($product);
        // $entityManager->flush();

        // return new Response(
        //     'Saved new product with id: '.$product->getId() //$product->category->getId()
        //     .' and new category with id: '.$category->getId()
        // );
    }


    /**
     * @Route("/add", name="ordinateur_new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer): Response
    {
        if ($request->request->get('newOrd') == null) {
            return new Response('newOrd vide !');
        }


        $n = $request->request->get('newOrd');

        $entityManager = $this->getDoctrine()->getManager();


        $ordinateur = new Ordinateur();

        $ordinateur->setNom($n);

        $entityManager->persist($ordinateur);
        $entityManager->flush();


        $r = $serializer->serialize($ordinateur, 'json');

        return new JsonResponse($r, 200, [], true);

        // return $this->render('ordinateur/new.html.twig', [
        //     'ordinateur' => $ordinateur,
        //     'form' => $form->createView(),
        // ]);
    }

    /**
     * @Route("/{id}/edit", name="ordinateur_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Ordinateur $ordinateur): Response
    {
        $form = $this->createForm(OrdinateurType::class, $ordinateur);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('ordinateur_index');
        }

        return $this->render('ordinateur/edit.html.twig', [
            'ordinateur' => $ordinateur,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="ordinateur_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Ordinateur $ordinateur): Response
    {
        if ($this->isCsrfTokenValid('delete' . $ordinateur->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($ordinateur);
            $entityManager->flush();
        }

        return $this->redirectToRoute('ordinateur_index');
    }
}
