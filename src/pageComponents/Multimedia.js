// src/pages/Multimedia.js

"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 2023 images
import img2023_1 from '../images/2023/IMG_5620.jpeg';
import img2023_2 from '../images/2023/IMG_5621.jpeg';
import img2023_3 from '../images/2023/IMG_5622.jpeg';
import img2023_4 from '../images/2023/IMG_5623.jpeg';
import img2023_5 from '../images/2023/IMG_5624.jpeg';
import img2023_6 from '../images/2023/IMG_5625.jpeg';
import img2023_7 from '../images/2023/IMG_5626.jpeg';
import img2023_8 from '../images/2023/IMG_5627.jpeg';
import img2023_9 from '../images/2023/IMG_5629.jpeg';
import img2023_10 from '../images/2023/IMG_5630.jpeg';
import img2023_11 from '../images/2023/IMG_5631.jpeg';
import img2023_12 from '../images/2023/IMG_5632.jpeg';
import img2023_13 from '../images/2023/IMG_5633.jpeg';
import img2023_14 from '../images/2023/IMG_5634.jpeg';
import img2023_15 from '../images/2023/IMG_5635.jpeg';
import img2023_16 from '../images/2023/IMG_5636.jpeg';
import img2023_17 from '../images/2023/IMG_5637.jpeg';
import img2023_18 from '../images/2023/IMG_5638.jpeg';
import img2023_19 from '../images/2023/IMG_5639.jpeg';
import img2023_20 from '../images/2023/IMG_5640.jpeg';
import img2023_21 from '../images/2023/IMG_5641.jpeg';
import img2023_22 from '../images/2023/IMG_5642.jpeg';
import img2023_23 from '../images/2023/IMG_5643.jpeg';
import img2023_24 from '../images/2023/IMG_5645.jpeg';
import img2023_25 from '../images/2023/IMG_5646.jpeg';
import img2023_26 from '../images/2023/IMG_5647.jpeg';
import img2023_27 from '../images/2023/IMG_5648.jpeg';
import img2023_28 from '../images/2023/IMG_5651.jpeg';
import img2023_29 from '../images/2023/IMG_5652.jpeg';
import img2023_30 from '../images/2023/IMG_5653.jpeg';
import img2023_31 from '../images/2023/IMG_5654.jpeg';
import img2023_32 from '../images/2023/IMG_5655.jpeg';
import img2023_33 from '../images/2023/IMG_5656.jpeg';
import img2023_34 from '../images/2023/IMG_5657.jpeg';
import img2023_35 from '../images/2023/IMG_5658.jpeg';
import img2023_36 from '../images/2023/IMG_5659.jpeg';
import img2023_37 from '../images/2023/IMG_5660.jpeg';
import img2023_38 from '../images/2023/IMG_5661.jpeg';
import img2023_39 from '../images/2023/IMG_5662.jpeg';
import img2023_40 from '../images/2023/IMG_5663.jpeg';
import img2023_41 from '../images/2023/IMG_5664.jpeg';
import img2023_42 from '../images/2023/IMG_5665.jpeg';
import img2023_43 from '../images/2023/IMG_5666.jpeg';
import img2023_44 from '../images/2023/IMG_5667.jpeg';
import img2023_45 from '../images/2023/IMG_5668.jpeg';
import img2023_46 from '../images/2023/IMG_5669.jpeg';
import img2023_47 from '../images/2023/IMG_5670.jpeg';
import img2023_48 from '../images/2023/IMG_5671.jpeg';
import img2023_49 from '../images/2023/IMG_5672.jpeg';
import img2023_50 from '../images/2023/IMG_5673.jpeg';
import img2023_51 from '../images/2023/IMG_5674.jpeg';
import img2023_52 from '../images/2023/IMG_5675.jpeg';
import img2023_53 from '../images/2023/IMG_5676.jpeg';
import img2023_54 from '../images/2023/IMG_5677.jpeg';
import img2023_55 from '../images/2023/IMG_5678.jpeg';
import img2023_56 from '../images/2023/IMG_5679.jpeg';
import img2023_57 from '../images/2023/IMG_5680.jpeg';
import img2023_58 from '../images/2023/IMG_5681.jpeg';
import img2023_59 from '../images/2023/IMG_5684.jpeg';
import img2023_60 from '../images/2023/IMG_5685.jpeg';
import img2023_61 from '../images/2023/IMG_5686.jpeg';
import img2023_62 from '../images/2023/IMG_5687.jpeg';
import img2023_63 from '../images/2023/IMG_5688.jpeg';
import img2023_64 from '../images/2023/IMG_5689.jpeg';
import img2023_65 from '../images/2023/IMG_5690.jpeg';
import img2023_66 from '../images/2023/IMG_5691.jpeg';
import img2023_67 from '../images/2023/IMG_5692.jpeg';
import img2023_68 from '../images/2023/IMG_5693.jpeg';
import img2023_69 from '../images/2023/IMG_5694.jpeg';
import img2023_70 from '../images/2023/IMG_5695.jpeg';
import img2023_71 from '../images/2023/IMG_5696.jpeg';
import img2023_72 from '../images/2023/IMG_5697.jpeg';
import img2023_73 from '../images/2023/IMG_5698.jpeg';
import img2023_74 from '../images/2023/IMG_5699.jpeg';
import img2023_75 from '../images/2023/IMG_5700.jpeg';
import img2023_76 from '../images/2023/IMG_5701.jpeg';
import img2023_77 from '../images/2023/IMG_5702.jpeg';
import img2023_78 from '../images/2023/IMG_5703.jpeg';
import img2023_79 from '../images/2023/IMG_5704.jpeg';
import img2023_80 from '../images/2023/IMG_5705.jpeg';
import img2023_81 from '../images/2023/IMG_5706.jpeg';
import img2023_82 from '../images/2023/IMG_5707.jpeg';
import img2023_83 from '../images/2023/IMG_5708.jpeg';
import img2023_84 from '../images/2023/IMG_5709.jpeg';
import img2023_85 from '../images/2023/IMG_5710.jpeg';
import img2023_86 from '../images/2023/IMG_5711.jpeg';
import img2023_87 from '../images/2023/IMG_5712.jpeg';
import img2023_88 from '../images/2023/IMG_5713.jpeg';
import img2023_89 from '../images/2023/IMG_5714.jpeg';
import img2023_90 from '../images/2023/IMG_5715.jpeg';
import img2023_91 from '../images/2023/IMG_5716.jpeg';
import img2023_92 from '../images/2023/IMG_5717.jpeg';
import img2023_93 from '../images/2023/IMG_5718.jpeg';
import img2023_94 from '../images/2023/IMG_5719.jpeg';
import img2023_95 from '../images/2023/IMG_5721.jpeg';
import img2023_96 from '../images/2023/IMG_5722.jpeg';
import img2023_97 from '../images/2023/IMG_5723.jpeg';
import img2023_98 from '../images/2023/IMG_5724.jpeg';

// 2024 images (currently labeled 2025 in your folder - you'll rename to 2024)
import img2024_1 from '../images/2024/IMG_9151.jpeg';
import img2024_2 from '../images/2024/IMG_9273.jpeg';
import img2024_3 from '../images/2024/IMG_9274.jpeg';
import img2024_4 from '../images/2024/IMG_9275.jpeg';
import img2024_5 from '../images/2024/IMG_9276.jpeg';
import img2024_6 from '../images/2024/IMG_9277.jpeg';
import img2024_7 from '../images/2024/IMG_9278.jpeg';
import img2024_8 from '../images/2024/IMG_9279.jpeg';
import img2024_9 from '../images/2024/IMG_9280.jpeg';
import img2024_10 from '../images/2024/IMG_9281.jpeg';
import img2024_11 from '../images/2024/IMG_9282.jpeg';
import img2024_12 from '../images/2024/IMG_9283.jpeg';
import img2024_13 from '../images/2024/IMG_9284.jpeg';
import img2024_14 from '../images/2024/IMG_9285.jpeg';
import img2024_15 from '../images/2024/IMG_9286.jpeg';
import img2024_16 from '../images/2024/IMG_9287.jpeg';
import img2024_17 from '../images/2024/IMG_9288.jpeg';
import img2024_18 from '../images/2024/IMG_9289.jpeg';
import img2024_19 from '../images/2024/IMG_9290.jpeg';
import img2024_20 from '../images/2024/IMG_9291.jpeg';
import img2024_21 from '../images/2024/IMG_9292.jpeg';
import img2024_22 from '../images/2024/IMG_9293.jpeg';
import img2024_23 from '../images/2024/IMG_9294.jpeg';
import img2024_24 from '../images/2024/IMG_9295.jpeg';
import img2024_25 from '../images/2024/IMG_9296.jpeg';
import img2024_26 from '../images/2024/IMG_9297.jpeg';
import img2024_27 from '../images/2024/IMG_9298.jpeg';
import img2024_28 from '../images/2024/IMG_9299.jpeg';
import img2024_29 from '../images/2024/IMG_9300.jpeg';
import img2024_30 from '../images/2024/IMG_9301.jpeg';
import img2024_31 from '../images/2024/IMG_9302.jpeg';
import img2024_32 from '../images/2024/IMG_9303.jpeg';
import img2024_33 from '../images/2024/IMG_9305.jpeg';
import img2024_34 from '../images/2024/IMG_9306.jpeg';
import img2024_35 from '../images/2024/IMG_9307.jpeg';
import img2024_36 from '../images/2024/IMG_9308.jpeg';
import img2024_37 from '../images/2024/IMG_9309.jpeg';
import img2024_38 from '../images/2024/IMG_9310.jpeg';
import img2024_39 from '../images/2024/IMG_9311.jpeg';
import img2024_40 from '../images/2024/IMG_9312.jpeg';
import img2024_41 from '../images/2024/IMG_9313.jpeg';
import img2024_42 from '../images/2024/IMG_9314.jpeg';
import img2024_43 from '../images/2024/IMG_9315.jpeg';
import img2024_44 from '../images/2024/IMG_9316.jpeg';
import img2024_45 from '../images/2024/IMG_9317.jpeg';
import img2024_46 from '../images/2024/IMG_9318.jpeg';
import img2024_47 from '../images/2024/IMG_9319.jpeg';
import img2024_48 from '../images/2024/IMG_9320.jpeg';
import img2024_49 from '../images/2024/IMG_9321.jpeg';
import img2024_50 from '../images/2024/IMG_9322.jpeg';
import img2024_51 from '../images/2024/IMG_9323.jpeg';
import img2024_52 from '../images/2024/IMG_9324.jpeg';
import img2024_53 from '../images/2024/IMG_9325.jpeg';
import img2024_54 from '../images/2024/IMG_9326.jpeg';
import img2024_55 from '../images/2024/IMG_9327.jpeg';
import img2024_56 from '../images/2024/IMG_9328.jpeg';
import img2024_57 from '../images/2024/IMG_9329.jpeg';
import img2024_58 from '../images/2024/IMG_9330.jpeg';
import img2024_59 from '../images/2024/IMG_9331.jpeg';
import img2024_60 from '../images/2024/IMG_9332.jpeg';
import img2024_61 from '../images/2024/IMG_9333.jpeg';
import img2024_62 from '../images/2024/IMG_9334.jpeg';
import img2024_63 from '../images/2024/IMG_9335.jpeg';
import img2024_64 from '../images/2024/IMG_9336.jpeg';
import img2024_65 from '../images/2024/IMG_9337.jpeg';
import img2024_66 from '../images/2024/IMG_9338.jpeg';
import img2024_67 from '../images/2024/IMG_9339.jpeg';
import img2024_68 from '../images/2024/IMG_9340.jpeg';
import img2024_69 from '../images/2024/IMG_9341.jpeg';
import img2024_70 from '../images/2024/IMG_9342.jpeg';
import img2024_71 from '../images/2024/IMG_9343.jpeg';
import img2024_72 from '../images/2024/IMG_9344.jpeg';
import img2024_73 from '../images/2024/IMG_9345.jpeg';
import img2024_74 from '../images/2024/IMG_9346.jpeg';
import img2024_75 from '../images/2024/IMG_9347.jpeg';
import img2024_76 from '../images/2024/IMG_9348.jpeg';
import img2024_77 from '../images/2024/IMG_9349.jpeg';
import img2024_78 from '../images/2024/IMG_9350.jpeg';
import img2024_79 from '../images/2024/IMG_9351.jpeg';
import img2024_80 from '../images/2024/IMG_9352.jpeg';
import img2024_81 from '../images/2024/IMG_9353.jpeg';
import img2024_82 from '../images/2024/IMG_9354.jpeg';
import img2024_83 from '../images/2024/IMG_9355.jpeg';
import img2024_84 from '../images/2024/IMG_9356.jpeg';
import img2024_85 from '../images/2024/IMG_9357.jpeg';
import img2024_86 from '../images/2024/IMG_9358.jpeg';
import img2024_87 from '../images/2024/IMG_9359.jpeg';
import img2024_88 from '../images/2024/IMG_9360.jpeg';
import img2024_89 from '../images/2024/IMG_9361.jpeg';
import img2024_90 from '../images/2024/IMG_9362.jpeg';
import img2024_91 from '../images/2024/IMG_9363.jpeg';
import img2024_92 from '../images/2024/IMG_9364.jpeg';
import img2024_93 from '../images/2024/IMG_9365.jpeg';

// 2025 images (currently labeled 2025_2 in your folder - you'll rename to 2025)
import img2025_1 from '../images/2025/IMG_0087.jpeg';
import img2025_2 from '../images/2025/IMG_0088.jpeg';
import img2025_3 from '../images/2025/IMG_0089.jpeg';
import img2025_4 from '../images/2025/IMG_0090.jpeg';
import img2025_5 from '../images/2025/IMG_0091.jpeg';
import img2025_6 from '../images/2025/IMG_0202.jpeg';
import img2025_7 from '../images/2025/IMG_0203.jpeg';
import img2025_8 from '../images/2025/IMG_0204.jpeg';
import img2025_9 from '../images/2025/IMG_0205.jpeg';
import img2025_10 from '../images/2025/IMG_0206.jpeg';
import img2025_11 from '../images/2025/IMG_0207.jpeg';
import img2025_12 from '../images/2025/IMG_0208.jpeg';
import img2025_13 from '../images/2025/IMG_0209.jpeg';
import img2025_14 from '../images/2025/IMG_0210.jpeg';
import img2025_15 from '../images/2025/IMG_0375.jpeg';
import img2025_16 from '../images/2025/IMG_0376.jpeg';
import img2025_17 from '../images/2025/IMG_0377.jpeg';
import img2025_18 from '../images/2025/IMG_0378.jpeg';
import img2025_19 from '../images/2025/IMG_0379.jpeg';
import img2025_20 from '../images/2025/IMG_0380.jpeg';
import img2025_21 from '../images/2025/IMG_0381.jpeg';
import img2025_22 from '../images/2025/IMG_0382.jpeg';
import img2025_23 from '../images/2025/IMG_0383.jpeg';
import img2025_24 from '../images/2025/IMG_0384.jpeg';
import img2025_25 from '../images/2025/IMG_0385.jpeg';
import img2025_26 from '../images/2025/IMG_0386.jpeg';
import img2025_27 from '../images/2025/IMG_0387.jpeg';
import img2025_28 from '../images/2025/IMG_0388.jpeg';
import img2025_29 from '../images/2025/IMG_0389.jpeg';
import img2025_30 from '../images/2025/IMG_0390.jpeg';
import img2025_31 from '../images/2025/IMG_0391.jpeg';
import img2025_32 from '../images/2025/IMG_0392.jpeg';
import img2025_33 from '../images/2025/IMG_0393.jpeg';
import img2025_34 from '../images/2025/IMG_0394.jpeg';
import img2025_35 from '../images/2025/IMG_0395.jpeg';
import img2025_36 from '../images/2025/IMG_0396.jpeg';
import img2025_37 from '../images/2025/IMG_0397.jpeg';
import img2025_38 from '../images/2025/IMG_0398.jpeg';
import img2025_39 from '../images/2025/IMG_0399.jpeg';
import img2025_40 from '../images/2025/IMG_0400.jpeg';
import img2025_41 from '../images/2025/IMG_0401.jpeg';
import img2025_42 from '../images/2025/IMG_0402.jpeg';
import img2025_43 from '../images/2025/IMG_0403.jpeg';
import img2025_44 from '../images/2025/IMG_0404.jpeg';
import img2025_45 from '../images/2025/IMG_0405.jpeg';
import img2025_46 from '../images/2025/IMG_0406.jpeg';
import img2025_47 from '../images/2025/IMG_0407.jpeg';
import img2025_48 from '../images/2025/IMG_0408.jpeg';
import img2025_49 from '../images/2025/IMG_0410.jpeg';

// Organize photos by year
const photosByYear = {
  2023: [
    { src: img2023_1, alt: 'Training 2023' },
    { src: img2023_2, alt: 'Training 2023' },
    { src: img2023_3, alt: 'Training 2023' },
    { src: img2023_4, alt: 'Training 2023' },
    { src: img2023_5, alt: 'Training 2023' },
    { src: img2023_6, alt: 'Training 2023' },
    { src: img2023_7, alt: 'Training 2023' },
    { src: img2023_8, alt: 'Training 2023' },
    { src: img2023_9, alt: 'Training 2023' },
    { src: img2023_10, alt: 'Training 2023' },
    { src: img2023_11, alt: 'Training 2023' },
    { src: img2023_12, alt: 'Training 2023' },
    { src: img2023_13, alt: 'Training 2023' },
    { src: img2023_14, alt: 'Training 2023' },
    { src: img2023_15, alt: 'Training 2023' },
    { src: img2023_16, alt: 'Training 2023' },
    { src: img2023_17, alt: 'Training 2023' },
    { src: img2023_18, alt: 'Training 2023' },
    { src: img2023_19, alt: 'Training 2023' },
    { src: img2023_20, alt: 'Training 2023' },
    { src: img2023_21, alt: 'Training 2023' },
    { src: img2023_22, alt: 'Training 2023' },
    { src: img2023_23, alt: 'Training 2023' },
    { src: img2023_24, alt: 'Training 2023' },
    { src: img2023_25, alt: 'Training 2023' },
    { src: img2023_26, alt: 'Training 2023' },
    { src: img2023_27, alt: 'Training 2023' },
    { src: img2023_28, alt: 'Training 2023' },
    { src: img2023_29, alt: 'Training 2023' },
    { src: img2023_30, alt: 'Training 2023' },
    { src: img2023_31, alt: 'Training 2023' },
    { src: img2023_32, alt: 'Training 2023' },
    { src: img2023_33, alt: 'Training 2023' },
    { src: img2023_34, alt: 'Training 2023' },
    { src: img2023_35, alt: 'Training 2023' },
    { src: img2023_36, alt: 'Training 2023' },
    { src: img2023_37, alt: 'Training 2023' },
    { src: img2023_38, alt: 'Training 2023' },
    { src: img2023_39, alt: 'Training 2023' },
    { src: img2023_40, alt: 'Training 2023' },
    { src: img2023_41, alt: 'Training 2023' },
    { src: img2023_42, alt: 'Training 2023' },
    { src: img2023_43, alt: 'Training 2023' },
    { src: img2023_44, alt: 'Training 2023' },
    { src: img2023_45, alt: 'Training 2023' },
    { src: img2023_46, alt: 'Training 2023' },
    { src: img2023_47, alt: 'Training 2023' },
    { src: img2023_48, alt: 'Training 2023' },
    { src: img2023_49, alt: 'Training 2023' },
    { src: img2023_50, alt: 'Training 2023' },
    { src: img2023_51, alt: 'Training 2023' },
    { src: img2023_52, alt: 'Training 2023' },
    { src: img2023_53, alt: 'Training 2023' },
    { src: img2023_54, alt: 'Training 2023' },
    { src: img2023_55, alt: 'Training 2023' },
    { src: img2023_56, alt: 'Training 2023' },
    { src: img2023_57, alt: 'Training 2023' },
    { src: img2023_58, alt: 'Training 2023' },
    { src: img2023_59, alt: 'Training 2023' },
    { src: img2023_60, alt: 'Training 2023' },
    { src: img2023_61, alt: 'Training 2023' },
    { src: img2023_62, alt: 'Training 2023' },
    { src: img2023_63, alt: 'Training 2023' },
    { src: img2023_64, alt: 'Training 2023' },
    { src: img2023_65, alt: 'Training 2023' },
    { src: img2023_66, alt: 'Training 2023' },
    { src: img2023_67, alt: 'Training 2023' },
    { src: img2023_68, alt: 'Training 2023' },
    { src: img2023_69, alt: 'Training 2023' },
    { src: img2023_70, alt: 'Training 2023' },
    { src: img2023_71, alt: 'Training 2023' },
    { src: img2023_72, alt: 'Training 2023' },
    { src: img2023_73, alt: 'Training 2023' },
    { src: img2023_74, alt: 'Training 2023' },
    { src: img2023_75, alt: 'Training 2023' },
    { src: img2023_76, alt: 'Training 2023' },
    { src: img2023_77, alt: 'Training 2023' },
    { src: img2023_78, alt: 'Training 2023' },
    { src: img2023_79, alt: 'Training 2023' },
    { src: img2023_80, alt: 'Training 2023' },
    { src: img2023_81, alt: 'Training 2023' },
    { src: img2023_82, alt: 'Training 2023' },
    { src: img2023_83, alt: 'Training 2023' },
    { src: img2023_84, alt: 'Training 2023' },
    { src: img2023_85, alt: 'Training 2023' },
    { src: img2023_86, alt: 'Training 2023' },
    { src: img2023_87, alt: 'Training 2023' },
    { src: img2023_88, alt: 'Training 2023' },
    { src: img2023_89, alt: 'Training 2023' },
    { src: img2023_90, alt: 'Training 2023' },
    { src: img2023_91, alt: 'Training 2023' },
    { src: img2023_92, alt: 'Training 2023' },
    { src: img2023_93, alt: 'Training 2023' },
    { src: img2023_94, alt: 'Training 2023' },
    { src: img2023_95, alt: 'Training 2023' },
    { src: img2023_96, alt: 'Training 2023' },
    { src: img2023_97, alt: 'Training 2023' },
    { src: img2023_98, alt: 'Training 2023' },
  ],
  2024: [
    { src: img2024_1, alt: 'Training 2024' },
    { src: img2024_2, alt: 'Training 2024' },
    { src: img2024_3, alt: 'Training 2024' },
    { src: img2024_4, alt: 'Training 2024' },
    { src: img2024_5, alt: 'Training 2024' },
    { src: img2024_6, alt: 'Training 2024' },
    { src: img2024_7, alt: 'Training 2024' },
    { src: img2024_8, alt: 'Training 2024' },
    { src: img2024_9, alt: 'Training 2024' },
    { src: img2024_10, alt: 'Training 2024' },
    { src: img2024_11, alt: 'Training 2024' },
    { src: img2024_12, alt: 'Training 2024' },
    { src: img2024_13, alt: 'Training 2024' },
    { src: img2024_14, alt: 'Training 2024' },
    { src: img2024_15, alt: 'Training 2024' },
    { src: img2024_16, alt: 'Training 2024' },
    { src: img2024_17, alt: 'Training 2024' },
    { src: img2024_18, alt: 'Training 2024' },
    { src: img2024_19, alt: 'Training 2024' },
    { src: img2024_20, alt: 'Training 2024' },
    { src: img2024_21, alt: 'Training 2024' },
    { src: img2024_22, alt: 'Training 2024' },
    { src: img2024_23, alt: 'Training 2024' },
    { src: img2024_24, alt: 'Training 2024' },
    { src: img2024_25, alt: 'Training 2024' },
    { src: img2024_26, alt: 'Training 2024' },
    { src: img2024_27, alt: 'Training 2024' },
    { src: img2024_28, alt: 'Training 2024' },
    { src: img2024_29, alt: 'Training 2024' },
    { src: img2024_30, alt: 'Training 2024' },
    { src: img2024_31, alt: 'Training 2024' },
    { src: img2024_32, alt: 'Training 2024' },
    { src: img2024_33, alt: 'Training 2024' },
    { src: img2024_34, alt: 'Training 2024' },
    { src: img2024_35, alt: 'Training 2024' },
    { src: img2024_36, alt: 'Training 2024' },
    { src: img2024_37, alt: 'Training 2024' },
    { src: img2024_38, alt: 'Training 2024' },
    { src: img2024_39, alt: 'Training 2024' },
    { src: img2024_40, alt: 'Training 2024' },
    { src: img2024_41, alt: 'Training 2024' },
    { src: img2024_42, alt: 'Training 2024' },
    { src: img2024_43, alt: 'Training 2024' },
    { src: img2024_44, alt: 'Training 2024' },
    { src: img2024_45, alt: 'Training 2024' },
    { src: img2024_46, alt: 'Training 2024' },
    { src: img2024_47, alt: 'Training 2024' },
    { src: img2024_48, alt: 'Training 2024' },
    { src: img2024_49, alt: 'Training 2024' },
    { src: img2024_50, alt: 'Training 2024' },
    { src: img2024_51, alt: 'Training 2024' },
    { src: img2024_52, alt: 'Training 2024' },
    { src: img2024_53, alt: 'Training 2024' },
    { src: img2024_54, alt: 'Training 2024' },
    { src: img2024_55, alt: 'Training 2024' },
    { src: img2024_56, alt: 'Training 2024' },
    { src: img2024_57, alt: 'Training 2024' },
    { src: img2024_58, alt: 'Training 2024' },
    { src: img2024_59, alt: 'Training 2024' },
    { src: img2024_60, alt: 'Training 2024' },
    { src: img2024_61, alt: 'Training 2024' },
    { src: img2024_62, alt: 'Training 2024' },
    { src: img2024_63, alt: 'Training 2024' },
    { src: img2024_64, alt: 'Training 2024' },
    { src: img2024_65, alt: 'Training 2024' },
    { src: img2024_66, alt: 'Training 2024' },
    { src: img2024_67, alt: 'Training 2024' },
    { src: img2024_68, alt: 'Training 2024' },
    { src: img2024_69, alt: 'Training 2024' },
    { src: img2024_70, alt: 'Training 2024' },
    { src: img2024_71, alt: 'Training 2024' },
    { src: img2024_72, alt: 'Training 2024' },
    { src: img2024_73, alt: 'Training 2024' },
    { src: img2024_74, alt: 'Training 2024' },
    { src: img2024_75, alt: 'Training 2024' },
    { src: img2024_76, alt: 'Training 2024' },
    { src: img2024_77, alt: 'Training 2024' },
    { src: img2024_78, alt: 'Training 2024' },
    { src: img2024_79, alt: 'Training 2024' },
    { src: img2024_80, alt: 'Training 2024' },
    { src: img2024_81, alt: 'Training 2024' },
    { src: img2024_82, alt: 'Training 2024' },
    { src: img2024_83, alt: 'Training 2024' },
    { src: img2024_84, alt: 'Training 2024' },
    { src: img2024_85, alt: 'Training 2024' },
    { src: img2024_86, alt: 'Training 2024' },
    { src: img2024_87, alt: 'Training 2024' },
    { src: img2024_88, alt: 'Training 2024' },
    { src: img2024_89, alt: 'Training 2024' },
    { src: img2024_90, alt: 'Training 2024' },
    { src: img2024_91, alt: 'Training 2024' },
    { src: img2024_92, alt: 'Training 2024' },
    { src: img2024_93, alt: 'Training 2024' },
  ],
  2025: [
    { src: img2025_1, alt: 'Training 2025' },
    { src: img2025_2, alt: 'Training 2025' },
    { src: img2025_3, alt: 'Training 2025' },
    { src: img2025_4, alt: 'Training 2025' },
    { src: img2025_5, alt: 'Training 2025' },
    { src: img2025_6, alt: 'Training 2025' },
    { src: img2025_7, alt: 'Training 2025' },
    { src: img2025_8, alt: 'Training 2025' },
    { src: img2025_9, alt: 'Training 2025' },
    { src: img2025_10, alt: 'Training 2025' },
    { src: img2025_11, alt: 'Training 2025' },
    { src: img2025_12, alt: 'Training 2025' },
    { src: img2025_13, alt: 'Training 2025' },
    { src: img2025_14, alt: 'Training 2025' },
    { src: img2025_15, alt: 'Training 2025' },
    { src: img2025_16, alt: 'Training 2025' },
    { src: img2025_17, alt: 'Training 2025' },
    { src: img2025_18, alt: 'Training 2025' },
    { src: img2025_19, alt: 'Training 2025' },
    { src: img2025_20, alt: 'Training 2025' },
    { src: img2025_21, alt: 'Training 2025' },
    { src: img2025_22, alt: 'Training 2025' },
    { src: img2025_23, alt: 'Training 2025' },
    { src: img2025_24, alt: 'Training 2025' },
    { src: img2025_25, alt: 'Training 2025' },
    { src: img2025_26, alt: 'Training 2025' },
    { src: img2025_27, alt: 'Training 2025' },
    { src: img2025_28, alt: 'Training 2025' },
    { src: img2025_29, alt: 'Training 2025' },
    { src: img2025_30, alt: 'Training 2025' },
    { src: img2025_31, alt: 'Training 2025' },
    { src: img2025_32, alt: 'Training 2025' },
    { src: img2025_33, alt: 'Training 2025' },
    { src: img2025_34, alt: 'Training 2025' },
    { src: img2025_35, alt: 'Training 2025' },
    { src: img2025_36, alt: 'Training 2025' },
    { src: img2025_37, alt: 'Training 2025' },
    { src: img2025_38, alt: 'Training 2025' },
    { src: img2025_39, alt: 'Training 2025' },
    { src: img2025_40, alt: 'Training 2025' },
    { src: img2025_41, alt: 'Training 2025' },
    { src: img2025_42, alt: 'Training 2025' },
    { src: img2025_43, alt: 'Training 2025' },
    { src: img2025_44, alt: 'Training 2025' },
    { src: img2025_45, alt: 'Training 2025' },
    { src: img2025_46, alt: 'Training 2025' },
    { src: img2025_47, alt: 'Training 2025' },
    { src: img2025_48, alt: 'Training 2025' },
    { src: img2025_49, alt: 'Training 2025' },
  ],
};
// die musch denn no definiere wenn sie hesch, entweder uf youtube und denn mit embed, 
  // oder via dfolders falls sie abeglade hesch
  
const videos = [
  { id: 'JPtZA4Bz8T0', title: 'Miracle On Ice', type: 'youtube' },
  { 
    id: 'DaLvdN9h8Ia', 
    title: 'On-Ice Highlights', 
    type: 'instagram' 
  }
];

export const newsItems = [
  { 
    slug: 'default-article', 
    title: 'Something happened', 
    date: 'Some date', 
    excerpt: 'Every place, everyday, something happens. Find out why.', 
    content: 'Full article content goes here.' 
  }
];

export default function Multimedia() {
  const t = useTranslations('multimedia');
  const locale = useLocale();
  
  const availableYears = Object.keys(photosByYear).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(availableYears[0]);
  
  const currentPhotos = photosByYear[selectedYear] || [];
  
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full z-10">
          
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-8 md:p-12 pt-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-center leading-tight mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-center opacity-90 max-w-md">
              {t('hero.subtitle')}
            </p>
            <p className="text-sm md:text-base text-center mt-4 opacity-75 font-medium tracking-wider">
              #3stepsathletics
            </p>
          </div>
          
          <div className="w-full md:w-1/2 h-full">
            <Swiper
              modules={[Autoplay, A11y]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
            >
              {currentPhotos.slice(0, 4).map((photo, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        <section id="photos" className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-3">
            {t('photos.title')}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4 max-w-2xl mx-auto">
            {t('photos.subtitle')}
          </p>
          
          <div className="flex justify-center mb-8">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-full font-semibold shadow-md hover:bg-blue-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <Swiper
              key={selectedYear}
              modules={[Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              loop={currentPhotos.length > 1}
              className="rounded-xl photo-swiper"
            >
              {currentPhotos.map((photo, i) => (
                <SwiperSlide key={i}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image 
                      src={photo.src} 
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="videos" className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-3">
            {t('videos.title')}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              loop={true}
              className="rounded-xl video-swiper"
            >
              {videos.map((video, i) => (
  <SwiperSlide key={i} className="pb-8">
    {video.type === 'instagram' ? (
      /* 📸 INSTAGRAM REEL DISPLAY (Portrait 9:16 aspect ratio scaled cleanly inside your container) */
      <div className="relative aspect-[9/16] h-[65vh] max-w-[360px] mx-auto rounded-xl overflow-hidden shadow-md">
        <iframe
          src={`https://www.instagram.com/p/${video.id}/embed`}
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
        />
      </div>
    ) : (
      /* 📺 STANDARD YOUTUBE DISPLAY */
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )}
    <h3 className="font-body text-lg font-semibold text-gray-800 mt-4">
      {video.title}
    </h3>
  </SwiperSlide>
))}
            </Swiper>
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-3">
            {t('news.title')}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, i) => (
              <Link
                key={i}
                href={`${locale}/multimedia/news/${item.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-102 transition-all duration-200 p-6 text-left group"
              >
                <div className="flex flex-col h-full">
                  <h3 className="font-heading text-lg text-primary mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-600 flex-grow leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wide group-hover:text-blue-600 transition-colors">
                      {t('news.readMore')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}