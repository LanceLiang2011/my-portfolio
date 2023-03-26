import Image from 'next/image';
import facebook from '../public/gallery/Lance_Liang_3D_facebook_logo_blue_disk_with_letter_f_made_of_bl_888b030c-b0ca-4769-bd37-5b755d9ee203.png';
import google from '../public/gallery/Lance_Liang_3D_google_logo_letter_G_made_of_colorful_carved_cry_6c1acb7e-86ed-4d10-9254-4cb3be93c01b.png';
import twitter from '../public/gallery/Lance_Liang_3D_twitter_logo_blue_bird_made_of_blue_diamondcarve_ac8b124b-57d5-419b-a980-1062a3633fb1.png';
import butterfly from '../public/gallery/Lance_Liang_A_butterfly_drone_with_large_delicate_wings_that_al_d0e6914a-5e79-4b90-824b-f49f53dbd3a2.png';
import centipede from '../public/gallery/Lance_Liang_A_centipede-like_bot_with_dozens_of_legs_and_sensor_f77848eb-adc5-4d8e-bdaf-6cab5743d781.png';
import beetle from '../public/gallery/Lance_Liang_A_metallic_beetle_equipped_with_sharp_pincers_and_p_e1150c73-a1f5-4393-aaf1-8eb352e75c88.png';
import spider from '../public/gallery/Lance_Liang_A_spider-like_bot_with_eight_jointed_legs_and_a_cen_a39c85fb-5623-4206-9c4c-52af6f4b82f7.png';
import spider2 from '../public/gallery/Lance_Liang_A_spider-like_bot_with_eight_jointed_legs_and_a_cen_f7cac4bc-1cbf-428a-8fd4-2ebaabd57193.png';
import wasp from '../public/gallery/Lance_Liang_A_wasp-like_machine_with_a_stinger_that_can_deliver_b648126a-802f-405d-8e7e-860b12eaa60a.png';
import art1 from '../public/gallery/Lance_Liang_Art_in_the_style_of_Tristan_Eaton_02eb7770-6575-4c44-8753-b8fd299c57ce.png';
import art2 from '../public/gallery/Lance_Liang_Art_in_the_style_of_Tristan_Eaton_2c566e15-322e-45f2-8a98-0f809d2d3220.png';
import art3 from '../public/gallery/Lance_Liang_Art_in_the_style_of_Tristan_Eaton_561c3538-dd0e-46e0-8076-a9614f41e53f.png';
import char1 from '../public/gallery/Lance_Liang_gesture_painting_guache_on_paper_Nissa_Revane_from__31d31323-1dcb-437e-b505-acc79fb737d7.png';
import char2 from '../public/gallery/Lance_Liang_gesture_painting_guache_on_paper_Liliana_Vess_from__1f7a3f5c-cfc4-4ff3-8264-79bff4ad02af.png';
import char3 from '../public/gallery/Lance_Liang_gesture_painting_guache_on_paper_Jace_Beleren_from__19a4ba46-719d-4e6f-ba1b-bc66038b19cf.png';
import char4 from '../public/gallery/Lance_Liang_gesture_painting_guache_on_paper_Chandra_Nalaar_fro_6ce19648-61a2-49c7-aae7-b10fd8ff6144.png';
import bag1 from '../public/gallery/Lance_Liang_luxury_leather_backpack_in_the_style_of_product_pho_c18f2555-21ce-4914-92d5-56aabdc033b9.png';
import bag2 from '../public/gallery/Lance_Liang_luxury_leather_backpack_in_the_style_of_product_pho_44b750bf-da69-46c1-9a4f-004b29717dff.png';
import bag3 from '../public/gallery/Lance_Liang_luxury_leather_backpack_in_the_style_of_product_pho_3f8e936c-1271-493c-8a63-c1c7e99d86b1.png';
import bag4 from '../public/gallery/Lance_Liang_black_luxury_leather_backpack_in_the_style_of_produ_efea650a-0142-4a6c-bff4-004ecfd7e662.png';
import cntower from '../public/gallery/Lance_Liang_Toronto_TV_tower_anime_background_style_of_Makoto_S_c271d9b2-6b0b-4148-95c5-d32498cd7ef4.png';
import girl from '../public/gallery/Lance_Liang_Create_a_photorealistic_portrait_of_a_model_wearing_7c3e0386-e60e-4d0b-9dd5-ab1a0d6e840a.png';
import girl2 from '../public/gallery/Lance_Liang_Create_a_photorealistic_award_winning_portrait_of_a_911ec876-cced-45e0-bec2-a59cf7908eb0.png';
import white from '../public/gallery/Lance_Liang_Walter_White_working_on_the_Foxconn_assembly_line_a_a4bfd6bb-f6b2-42f9-834f-7a1562ea12c7.png';

export default function Gallery() {
  return (
    <section className=' text-center mt-10'>
      <h3 className='text-purple-600'>Gallery</h3>
      <div className='mx-auto my-6 max-w-4xl p-6'>
        <p>
          Welcome to my AI art gallery, where I showcase some of the stunning
          works created using the Midjourney AI art tool. As a lover of both art
          and technology, I have been fascinated by the creative potential of
          AI, and Midjourney has allowed me to explore new dimensions of
          artistic expression. From abstract compositions to surreal landscapes,
          these AI-generated pieces reflect the limitless possibilities of
          machine creativity. I hope you enjoy browsing through my collection
          and discovering the fascinating world of AI art.
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={facebook}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={google}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={twitter}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={butterfly}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={beetle}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={centipede}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={spider}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={spider2}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={wasp}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={art1}
              alt=''
            />
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={art2}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={art3}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={char1}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={char2}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={char3}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={char4}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={bag1}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={bag2}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={bag3}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={bag4}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={cntower}
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={girl}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={girl2}
              alt=''
            />
          </div>
          <div>
            <Image
              width={220}
              className='h-auto max-w-full rounded-lg'
              src={white}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}
